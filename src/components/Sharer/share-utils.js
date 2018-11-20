function getArticleUrl(props) {
  return encodeURIComponent(`https://molo.news/artikel/${props.id}`);
}

export function getWhatsappLink(props) {
  return `whatsapp://send?text="${props.title}" ${props.url}`;
}

export function getTwitterLink(props) {
  return `https://twitter.com/intent/tweet?source=${props.url}&text=${encodeURIComponent(props.title)}%20${props.url}`;
}

export function getFacebookLink(props) {
  return `https://www.facebook.com/sharer/sharer.php?u=${props.url}&t=${encodeURIComponent(props.title)}%20${props.url}`;
}

export function getLinks(props) {
  const data = Object.assign({}, props, { url: getArticleUrl(props) });

  return {
    whatsapp: getWhatsappLink(data),
    twitter: getTwitterLink(data),
    facebook: getFacebookLink(data)
  };
}

export default {
  getLinks,
  getWhatsappLink,
  getTwitterLink,
  getFacebookLink
};
