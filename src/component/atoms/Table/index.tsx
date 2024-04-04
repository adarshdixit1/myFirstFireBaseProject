import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const Index = ({rows,columns}:any) => {
    return (
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </>
    )
}

export default Index