export const eventHandlers = {}

export const addListener = (node, type, handler, capture = false) => {
  if (!(type in eventHandlers)) {
    eventHandlers[type] = []
  }
  // here we track the events and their nodes (note that we cannot
  // use node as Object keys, as they'd get coerced into a string
  eventHandlers[type].push({
    node: node,
    handler: handler,
    capture: capture,
  })
  node.addEventListener(type, handler, capture)
}

export const removeAllListeners = (targetNode) => {
  // remove listeners from the matching nodes
  if (Object.keys(eventHandlers).length) {
    Object.keys(eventHandlers).forEach((type) => {
      eventHandlers[type]
        .filter(({ node }) => node === targetNode)
        .forEach(({ node, handler, capture }) =>
          node.removeEventListener(type, handler, capture)
        )

      // update eventHandlers global
      eventHandlers[type] = eventHandlers[type].filter(
        ({ node }) => node !== targetNode
      )
    })
  }
}

// //全域共用監聽事件
// export const EventListener = (component) => {
//   //全部監聽事件
//   const allListenerEvent = {
//     body: {
//       targetNode: document.querySelector('body'),
//       listener: {
//         //左鍵事件
//         // click: (e) => {},
//       },
//     },
//     window: {
//       targetNode: window,
//       listener: {
//         // //頁面切換事件
//         // hashchange: (e) => {
//         //   //modal
//         //   $('[data-modal="true"]').modal('hide').remove()
//         //   //backdrop
//         //   document
//         //     .querySelectorAll('.modal-backdrop')
//         //     .forEach((modal) => modal.remove())
//         // },
//       },
//     },
//   }

//   //載入全域監聽事件
//   Object.keys(allListenerEvent).forEach((target) => {
//     Object.keys(allListenerEvent[target].listener).forEach((type) => {
//       addListener(
//         allListenerEvent[target].targetNode, //綁定目標
//         type, //事件類型
//         allListenerEvent[target].listener[type] //listener function
//       )
//     })
//   })
// }
