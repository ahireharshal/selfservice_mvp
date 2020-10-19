import React from 'react'


import Rating from '../Rating/Rating'

export const book_cols = [


    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 230 },

    {
        field: "link",
        headerName: "Link",
        sortable: false,
        width: 200,
        disableClickEventBubbling: true,
        renderCell: (d) => {
        return <a href={d.value} target="_blank" rel="noopener noreferrer">{d.value}</a>
        }
    },


    { field: 'last_modified', headerName: 'Last Modified', width: 130 },
    {
        field: "",
        headerName: "Rating",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: () => {
            return < Rating />
        }
    }
];

export const r_book_rows = [
    { id: 1, name: 'Redis in Action', link: 'https://en.wikipedia.org/wiki/Redis', last_modified: 'October 14, 2020' },
    { id: 2, name: 'Redis Essentials', link: 'https://en.wikipedia.org/wiki/Redis', last_modified: 'March 14, 2020' },

    { id: 3, name: 'Redis Cookbook', link: 'https://en.wikipedia.org/wiki/Redis', last_modified: 'January 14, 2020' },

    { id: 4, name: 'Mastering Redis', link: 'https://en.wikipedia.org/wiki/Redis', last_modified: 'November 14, 2020' },

    { id: 4, name: 'Redis 4.x Cookbook: ', link: 'https://en.wikipedia.org/wiki/Redis', last_modified: 'November 14, 2020' },
    { id: 4, name: 'Learning Redis', link: 'https://www.amazon.com/Learning-Redis-Vinoo-Das/dp/1783980125', last_modified: 'November 14, 2020' }

];


export const g_book_rows = [
    { id: 1, name: 'Pro Git', link: 'https://www.amazon.com/Introducing-GitHub-Non-Technical-Peter-Bell-ebook/dp/B00PHTRLL0', last_modified: 'October 14, 2020' },
    { id: 2, name: 'GitHub For Dummies', link: 'https://www.amazon.com/Introducing-GitHub-Non-Technical-Peter-Bell-ebook/dp/B00PHTRLL0', last_modified: 'March 14, 2020' },

    { id: 3, name: 'Introducing GitHub: A Non-Technical Guide', link: 'https://www.amazon.com/Introducing-GitHub-Non-Technical-Peter-Bell-ebook/dp/B00PHTRLL0', last_modified: 'January 14, 2020' },


];
