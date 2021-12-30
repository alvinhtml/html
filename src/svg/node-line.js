const svgNS = "http://www.w3.org/2000/svg"

// 曲线拐角比例
const lineCurveScale = 0.8
const node_width = 120
const node_height = 30

const flows = [{
    "id": "7fe91bb2703bdc15",
    "type": "tab",
    "label": "流程 1",
    "disabled": false,
    "info": ""
  },
  {
    "id": "17e6bea5590f2c35",
    "type": "sg-debug",
    "z": "7fe91bb2703bdc15",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "false",
    "statusVal": "",
    "statusType": "auto",
    "x": 670,
    "y": 200,
    "wires": []
  },
  {
    "id": "883e5d8966d5dcfd",
    "type": "sg-inject",
    "z": "7fe91bb2703bdc15",
    "name": "",
    "props": [{
        "p": "payload"
      },
      {
        "p": "topic",
        "vt": "str"
      }
    ],
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "topic": "",
    "payload": "{\"token\":\"MCCB real-time data 1\",\"timestamp\":\"2021-12-15T13:24:02.354+0800\",\"data_row\":\"single\",\"body\": {},\"appName\":\"appMccb\",\"model\":\"MCCB\",\"devID\":\"MCCB_4833d34b56b45818\"}",
    "payloadType": "str",
    "x": 130,
    "y": 140,
    "wires": [
      [
        "6df0b44f26401ab6"
      ]
    ]
  },
  {
    "id": "6df0b44f26401ab6",
    "type": "calculation-node",
    "z": "7fe91bb2703bdc15",
    "name": "",
    "formula": "PhV_phsC + 1",
    "result": "ab",
    "x": 390,
    "y": 280,
    "wires": [
      [
        "17e6bea5590f2c35"
      ]
    ]
  }
]

function generateLinkPath(origX, origY, destX, destY, sc = 1) {
  const dy = destY - origY
  const dx = destX - origX
  const delta = Math.sqrt(dy * dy + dx * dx)
  let scale = lineCurveScale
  const scaleY = 0
  if (dx * sc > 0) {
    if (delta < node_width) {
      scale = 0.75 - 0.75 * ((node_width - delta) / node_width)
      // scale += 2 * (Math.min(5 * node_width, Math.abs(dx)) / (5 * node_width))
      // if (Math.abs(dy) < 3 * node_height) {
      //   scaleY = ((dy > 0) ? 0.5 : -0.5) * (((3 * node_height) - Math.abs(dy)) / (3 * node_height)) * (Math.min(node_width, Math.abs(dx)) / (node_width))
      // }
    }
  } else {
    scale = 0.4 - 0.2 * (Math.max(0, (node_width - Math.min(Math.abs(dx), Math.abs(dy))) / node_width))
  }
  if (dx * sc > 0) {
    return "M " + origX + " " + origY +
      " C " + (origX + sc * (node_width * scale)) + " " + (origY + scaleY * node_height) + " " +
      (destX - sc * (scale) * node_width) + " " + (destY - scaleY * node_height) + " " +
      destX + " " + destY
  } else {

    let midX = Math.floor(destX - dx / 2)
    let midY = Math.floor(destY - dy / 2)
    //
    if (dy === 0) {
      midY = destY + node_height
    }
    const cp_height = node_height / 2
    const y1 = (destY + midY) / 2
    const topX = origX + sc * node_width * scale
    const topY = dy > 0 ? Math.min(y1 - dy / 2, origY + cp_height) : Math.max(y1 - dy / 2, origY - cp_height)
    const bottomX = destX - sc * node_width * scale
    const bottomY = dy > 0 ? Math.max(y1, destY - cp_height) : Math.min(y1, destY + cp_height)
    const x1 = (origX + topX) / 2
    const scy = dy > 0 ? 1 : -1
    const cp = [
      // Orig -> Top
      [x1, origY],
      [topX, dy > 0 ? Math.max(origY, topY - cp_height) : Math.min(origY, topY + cp_height)],
      // Top -> Mid
      // [Mirror previous cp]
      [x1, dy > 0 ? Math.min(midY, topY + cp_height) : Math.max(midY, topY - cp_height)],
      // Mid -> Bottom
      // [Mirror previous cp]
      [bottomX, dy > 0 ? Math.max(midY, bottomY - cp_height) : Math.min(midY, bottomY + cp_height)],
      // Bottom -> Dest
      // [Mirror previous cp]
      [(destX + bottomX) / 2, destY]
    ]
    if (cp[2][1] === topY + scy * cp_height) {
      if (Math.abs(dy) < cp_height * 10) {
        cp[1][1] = topY - scy * cp_height / 2
        cp[3][1] = bottomY - scy * cp_height / 2
      }
      cp[2][0] = topX
    }
    return "M " + origX + " " + origY +
      " C " +
      cp[0][0] + " " + cp[0][1] + " " +
      cp[1][0] + " " + cp[1][1] + " " +
      topX + " " + topY +
      " S " +
      cp[2][0] + " " + cp[2][1] + " " +
      midX + " " + midY +
      " S " +
      cp[3][0] + " " + cp[3][1] + " " +
      bottomX + " " + bottomY +
      " S " +
      cp[4][0] + " " + cp[4][1] + " " +
      destX + " " + destY
  }
}



// 创建 path
function createPath(origX, origY, destX, destY) {
  const g = document.createElementNS(svgNS, "g")
  g.classList.add("red-ui-flow-link")
  const d = generateLinkPath(origX, origY, destX, destY)
  g.innerHTML = `
    <path class="red-ui-flow-link-line red-ui-flow-link-path red-ui-flow-subflow-link" d="${d}"></path>
  `
  return g
}

// 创建 node 节点
function createNode(node) {
  const g = document.createElementNS(svgNS, "g")
  g.setAttribute("id", node.id)
  g.classList.add("red-ui-flow-node")
  g.classList.add("red-ui-flow-node-group")
  g.setAttribute("transform", "translate(" + node.x + "," + node.y + ")")

  g.innerHTML = `
    <rect class="red-ui-flow-node" rx="5" ry="5" fill="#c0edc0" width="120" height="30"></rect>
    <g class="red-ui-flow-node-label" transform="translate(0, 16)">
      <text class="red-ui-flow-node-label-text" x="60" y="0">${node.name || node.id.substr(0, 12)}</text>
    </g>
  `
  return g
}

// 创建端口

function createPort(type) {
  const g = document.createElementNS(svgNS, "g")
  const transform = type === "input" ? "translate(-5, 10)" : "translate(115, 10)"
  g.setAttribute("transform", transform)
  const className = type === "input" ? "red-ui-flow-port-input" : "red-ui-flow-port-output"
  g.classList.add(className)
  const rectStr = type === "input" ?
    '<rect class="red-ui-flow-port" rx="3" ry="3" width="10" height="10"></rect>' :
    '<rect rx="3" ry="3" width="10" height="10" class="red-ui-flow-port"></rect>'
  g.innerHTML = rectStr
  return g
}

const selected = []
// 取消选中
function unselectAll() {
  selected.forEach(node => {
    node.classList.remove("red-ui-flow-node-selected")
  })
  selected.length = 0
}


// 点击选中事件
const handleSelect = function (e) {
  e.stopPropagation()
  unselectAll()
  const target = e.target
  target.classList.add("red-ui-flow-node-selected")
  selected.push(target)
}

function nodered(svg, callback) {
  const grid = document.createElementNS(svgNS, "g")
  const nodes = document.createElementNS(svgNS, "g")
  const links = document.createElementNS(svgNS, "g")
  grid.classList.add("red-ui-workspace-chart-grid")

  svg.appendChild(grid)
  svg.appendChild(links)
  svg.appendChild(nodes)

  svg.addEventListener("click", function (e) {
    unselectAll()
  })


  for (let i = 0; i < 5001; i += 20) { // 创建网格
    const verticalLine = document.createElementNS(svgNS, "line")
    verticalLine.setAttribute("x1", i)
    verticalLine.setAttribute("y1", 0)
    verticalLine.setAttribute("x2", i)
    verticalLine.setAttribute("y2", 5000)
    grid.appendChild(verticalLine)
    const horizontalLine = document.createElementNS(svgNS, "line")
    horizontalLine.setAttribute("x1", 0)
    horizontalLine.setAttribute("y1", i)
    horizontalLine.setAttribute("x2", 5000)
    horizontalLine.setAttribute("y2", i)
    grid.appendChild(horizontalLine)
  }

  flows.forEach(node => {
    if (node.type !== 'tab') {
      const g = createNode(node)
      node.svg = g
      nodes.appendChild(g)

      g.onclick = (e) => {
        handleSelect(e)
        callback({
          ...node,
          event: e
        })
      }
    }
  })
  flows.forEach(node => {
    if (node.wires && node.wires.length > 0) {
      node.wires.forEach(w => {
        if (Array.isArray(w)) {
          if (node.svg) {
            const output = createPort("output")
            node.svg.appendChild(output)
          }
          w.forEach(wire => {
            console.log(wire);
            const destNode = flows.find(n => n.id === wire)
            if (destNode) {
              if (destNode.svg) {
                const output = createPort("input")
                destNode.svg.appendChild(output)
              }
              const path = createPath(node.x + node_width, node.y + node_height / 2, destNode.x, destNode.y + node_height / 2)
              links.appendChild(path)
            }
          })
        }
      })
    }
  })
}

nodered(document.querySelector("#svg"), (node) => {
  console.log(node);
})