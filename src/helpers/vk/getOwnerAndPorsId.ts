const getOwnerAndPorsId = (url: string): [number, number] | null => {
  try {
    const match = url.match(/wall(-?\d+)_(\d+)/);

    if (match) {
      const ownerID = Number(match[1]);
      const postID = Number(match[2]);

      return [postID, ownerID];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default getOwnerAndPorsId;
