import React from 'react'


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
        return <a href={d.value} target="_blank" rel="noopener noreferrer">{d.value}</a>
        }
    },


    { field: 'type', headerName: 'Type', width: 200 }
];

export const p_cert_rows = [
    { id: 'PH871', name: 'AWS Associate', link: 'https://aws.amazon.com/certification/', type: 'Internal' },

    { id: 'BJ561', name: 'AWS: Professional', link: 'https://aws.amazon.com/certification/', type: 'External' },
];


export const n_cert_rows = [
    { id: 'N871', name: 'Databricks Certified Associate Developer for Apache Spark 3.0 ', link: 'https://academy.databricks.com/category/certifications', type: 'Internal' },

    { id: 'N561', name: 'Databricks: Professional', link: 'https://academy.databricks.com/category/certifications', type: 'External' },




];


export const a_cert_rows = [
    { id: 'A001', name: 'AngularJs Associate', link: 'https://openjsf.org/certification/', type: 'Internal' },

    { id: 'A002', name: 'AngularJs: Professional', link: 'https://openjsf.org/certification/', type: 'External' },




];




