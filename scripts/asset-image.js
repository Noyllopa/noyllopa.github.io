'use strict'

// MarkText 的相对目录粘贴会在正文里留下 `文章名/xxx.png` 这种相对链接，
// 而日期式 permalink 会让它指错位置，这里按文章自己的 permalink 重写。
const IMAGE_LINK_RE = /(!\[[^\]]*\]\()\s*([^)\s]+?)(\s*(?:"[^"]*"|'[^']*'))?\)/g

const isLocalAsset = (src) =>
  !/^(?:[a-z]+:)?\/\//i.test(src) && !src.startsWith('/') && !src.startsWith('data:')

// 统一取「目录」形式：以 / 结尾的路径原样用，否则去掉最后一段文件名
const toBasePath = (url) => {
  const { pathname } = new URL(url)
  return pathname.endsWith('/') ? pathname : pathname.replace(/[^/]*$/, '')
}

hexo.extend.filter.register('before_post_render', (post) => {
  const dir = toBasePath(post.permalink)
  const assetDir = post.source.split('/').pop().replace(/\.[^./]+$/, '')

  post.content = post.content.replace(IMAGE_LINK_RE, (full, head, src, title) => {
    if (!isLocalAsset(src)) return full
    const parts = src.replace(/\\/g, '/').split('/')
    // Hexo 把资源目录的内容直接发布到 permalink 目录下，链接里那层目录是重复的
    if (parts[0] === assetDir) parts.shift()
    return `${head}${encodeURI(dir + parts.join('/'))}${title || ''})`
  })

  return post
})
