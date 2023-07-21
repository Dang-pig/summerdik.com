const blogs = [
    {
        id: 1,
        title: 'First blog',
        description: 'This is the very first blog!',
        dat: "20/7/2023",
        content: "Hi everyone, this is just a test.\nThis feature is currenly being developed so don't be anxious!"
    },
    {
        id: 2,
        title: 'These are just test blogs',
        description: 'This is a short description for the second blog post.',
        dat: "20/7/2023",
        content: "Hi! Again, this is just a test."
    },
    {
        id: 3,
        title: 'Kayaking in Ha Long Bay',
        description: 'No content',
        dat: "21/7/2023",
        content: "We haven't write this yet :\\",
    }
];
const blogList = document.getElementById('blog-list');

blogs.forEach(blog => {
    const html = `
            <li class="list-group-item">
                <h5 class="card-title">${blog.title}</h5>
                <p class="card-text">${blog.description}</p>
                <p class="post-date">${blog.dat}</p>
                <a href="blog.html?id=${blog.id}" target="_blank" class="btn btn-primary">Read More</a>
            </li>
        `;

    blogList.innerHTML += html;
});