export function isYoutubeId(id: string): boolean {
  const re = /^[a-zA-Z0-9_-]{11}$/;
  return re.test(id);
}

export function findID(url: string): string | null {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : null;
}