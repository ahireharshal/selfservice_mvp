import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';
import Rating from '../Rating/Rating'



export const training_cols = [
    { field: 'id', headerName: 'ID', width: 50 },

    {
        field: "",
        headerName: "Invite",
        sortable: false,
        width: 80,
        disableClickEventBubbling: true,
        renderCell: () => {
            return <IconButton aria-label="download" href="/event.ics" target="_blank">
                <CloudDownloadIcon fontSize="large" />
            </IconButton>
        }
    },

    { field: 'training_name', headerName: 'Training Name', width: 230 },
    { field: 'duration', headerName: 'Duration', width: 90 },
    { field: 'location', headerName: 'Location', width: 120 },
    { field: 'date', headerName: 'Date', width: 150 },
    {
        field: "",
        headerName: "Rating",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            return <Rating/>
        }
    },
];

export const r_training_rows = [
    { id: 1, training_name: 'Learn Redis And Utilize Jedis With Spring Data Redis', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 2, training_name: 'Learn Redis from Scratch', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 3, training_name: 'Redis', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 24, 2020' },

    { id: 4, training_name: 'Redis basics', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 4, 2020' },
];


export const g_training_rows = [
    { id: 1, training_name: 'GitHub Learning Lab', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 2, training_name: 'GitHub begineer', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 3, training_name: 'GitHub Command Line', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 24, 2020' },
];




