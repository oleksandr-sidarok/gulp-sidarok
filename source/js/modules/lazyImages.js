import LazyLoad from 'vanilla-lazyload'
import canUseWepb from '../helpers/canUseWebp.js'

export default () => {
  if (!canUseWepb()) {
    const LazyBgItems = document.querySelectorAll('.lazy[data-bg-fallback]')

    LazyBgItems.forEach((element) => {
      const srcBgFallback = element.getAttribute('data-bg-fallback')
      element.setAttribute('data-bg', srcBgFallback)
    })
  }

  const LazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  })
}