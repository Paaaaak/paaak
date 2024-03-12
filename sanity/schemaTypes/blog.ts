export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of post',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of my post title',
            options: {
                source: 'title',
            },
        },
        {
            name: 'postImage',
            type: 'image',
            title: 'Post Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Post Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
            ],
        },
    ]
}