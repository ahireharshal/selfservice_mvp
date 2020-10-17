import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';

import Rating from '../Rating/Rating'

export const cert_cols = [


    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 300 },

    {
        field: "link",
        headerName: "Link",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            console.log(d)
        return <a href={d.value} target="_blank" rel="noopener noreferrer">{d.value}</a>
        }
    },


    { field: 'type', headerName: 'Type', width: 200 }
];

export const p_cert_rows = [
    { id: 'PH871', name: 'PostgreSQL Associate', link: 'https://www.enterprisedb.com/training/postgres-certification', type: 'Internal' },

    { id: 'BJ561', name: 'PostgreSQL: Professional', link: 'https://www.enterprisedb.com/training/postgres-certification', type: 'External' },
    { id: 'BJ531', name: 'PostgreSQL: Professional', link: 'https://www.enterprisedb.com/training/postgres-certification', type: 'External' },
    { id: 'BJ521', name: 'PostgreSQL: Professional', link: 'https://www.enterprisedb.com/training/postgres-certification', type: 'External' },




];


export const n_cert_rows = [
    { id: 'N871', name: 'Nodejs Associate', link: 'https://openjsf.org/certification/', type: 'Internal' },

    { id: 'N561', name: 'Nodejs: Professional', link: 'https://openjsf.org/certification/', type: 'External' },




];



