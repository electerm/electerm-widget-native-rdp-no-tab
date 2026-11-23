electerm.onTabStatusChange(tab => {
  if (tab.type === 'rdp' && tab.nativeRdp && tab.status === 'success') {
    electerm.closeTab(tab.id)
  }
})
