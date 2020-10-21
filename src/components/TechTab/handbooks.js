import React from 'react'
import Rating from '../Rating/Rating'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';
export const book_cols = [


    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 330 },

    {
        field: "link",
        headerName: "Download",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (d) => {

            console.log(d)
        return <div> <IconButton aria-label="download" href={d.value} target="_blank">
                            <CloudDownloadIcon fontSize="large" /></IconButton></div>
        }
    },


    { field: 'last_modified', headerName: 'Last Modified', width: 200 },
    {
        field: "",
        headerName: "Rating",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            return <Rating r_index={d.rowIndex}/>
        }
    }
];

export const p_book_rows = [
    { id: 1, name: 'Amazon Web Services in Action', link: '/aws.pdf', last_modified: 'October 14, 2020' },
    { id: 2, name: 'A Hands-On Guide to the Fundamentals of AWS Cloud', link: '/aws.pdf', last_modified: 'March 14, 2020' },

    { id: 3, name: 'AWS Certified Solutions Architect', link: '/aws.pdf', last_modified: 'January 14, 2020' },

    { id: 4, name: 'AWS: The Most Complete Guide', link: '/aws.pdf', last_modified: 'November 14, 2020' },

    { id: 4, name: 'AWS Administration', link: '/aws.pdf', last_modified: 'November 14, 2020' },
    { id: 4, name: 'AWS for DBA', link: '/aws.pdf', last_modified: 'November 14, 2020' }

];


export const n_book_rows = [
    { id: 1, name: 'Apache Spark Using Azure Databricks', link: 'https://databricks.com/wp-content/uploads/2018/10/DB-for-Data-Science-Solution-Sheet.pdf', last_modified: 'October 14, 2020' },
    { id: 2, name: 'DataBricks® PySpark 2.x', link: 'https://databricks.com/wp-content/uploads/2018/10/DB-for-Data-Science-Solution-Sheet.pdf', last_modified: 'March 14, 2020' },

    { id: 3, name: 'Mastering DataBricks®', link: 'https://databricks.com/wp-content/uploads/2018/10/DB-for-Data-Science-Solution-Sheet.pdf', last_modified: 'January 14, 2020' },

];

export const a_book_rows = [
    { id: 1, name: 'AngularJs Design Patterns', link: 'https://en.wikipedia.org/wiki/Node.js', last_modified: 'October 14, 2020' },
    { id: 2, name: 'Beginning AngularJs.js', link: 'https://en.wikipedia.org/wiki/Node.js', last_modified: 'March 14, 2020' },

    { id: 3, name: 'UI Development with AngularJs', link: 'https://en.wikipedia.org/wiki/Node.js', last_modified: 'January 14, 2020' },

];


