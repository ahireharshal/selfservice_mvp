import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Rating from '../Rating/Rating'

import EventIcon from '@material-ui/icons/Event';


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
                <EventIcon fontSize="large" />
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
            return <Rating r_index={d.rowIndex}/>
        }
    },
];

export const p_training_rows = [
    { id: 1, training_name: 'AWS EC2', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 2, training_name: 'AWS Lambda', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 3, training_name: 'Terraform', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 24, 2020' },

    { id: 4, training_name: 'Big Data', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 4, 2020' },

    { id: 5, training_name: 'AWS Security', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 6, training_name: 'Coding Standard', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 12, 2020' },

    { id: 7, training_name: 'Python Advance Level', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 3, 2020' },

    { id: 8, training_name: 'AWS VPC', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 13, 2020' },

    { id: 9, training_name: 'AWS ESC', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 10, training_name: 'AWS Redshift', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

];


export const n_training_rows = [
    { id: 1, training_name: 'Databricks development', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 2, training_name: 'Databricks mastering', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 3, training_name: 'Databricks basic', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 24, 2020' },

];




export const a_training_rows = [
    { id: 1, training_name: 'Apache spark basic', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 2, training_name: 'Apache spark for UI develoers', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 3, training_name: 'Apache spark for data engineers', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 24, 2020' },

];




