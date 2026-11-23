electerm.onTabStatusChange(tab => {
  if (tab.type === 'rdp' && tab.options.client === 'external' && tab.status === 'success') {
    electerm.closeTab(tab.id)
  }
})
