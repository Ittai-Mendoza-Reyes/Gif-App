export const getGif = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=RJGGF64Euwy2G2VXd2YwnmhQt4XqySSx&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();
    // const {img} = { data }

    const gifs = data.map(img =>  ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));

    return gifs;

}

