const getCommentsCount = async (url: string): Promise<number | undefined> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return undefined;
    }

    const data = await response.json();
    const commentsCount = data?.response?.count;

    if (commentsCount !== undefined) {
      return commentsCount;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

export default getCommentsCount;
