

const paginate = (followers) => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);

    const newFollowers = [{ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage
        return followers.slice(start, start + itemsPerPage)

    }]

    return newFollowers

}

export default paginate