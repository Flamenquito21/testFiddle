window.api.onFullScreenStatus((event, isFullScreen) => {
  if (isFullScreen) {
    console.log('full screen')
  } else {
    console.log('not full screen')
  }
})
