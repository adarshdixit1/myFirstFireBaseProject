import React from "react";
import { Wrapper } from "../../../component/common";
import Table from "../../../component/atoms";

const Index = () => {
    const data = [
        { date: "22/10/2024", price: 250, borrowed: 1, lent: 0, category: "Sabji" },
        { date: "22/10/2024", price: 5000, borrowed: 0.5, lent: 0.5, category: "Room Rent" },
        { date: "22/10/2024", price: 60, borrowed: 0, lent: 1, category: "Chai" },
        { date: "22/10/2024", price: 870, borrowed: 0.5, lent: 0.5, category: "Grocery" },
    ];

    // Calculate total borrow and total lent
    let totalBorrow = 0;
    let totalLent = 0;

    data.forEach(entry => {
        totalBorrow += (entry.borrowed || 0) * entry.price;
        totalLent += (entry.lent || 0) * entry.price;
    });


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'borrowed', headerName: 'Borrowed', type: 'number', width: 120 },
        { field: 'lent', headerName: 'Lent', type: 'number', width: 120 },
    ];

    const rows = data.map((entry, index) => ({
        id: index + 1,
        date: entry.date,
        price: entry.price,
        category: entry.category,
        borrowed: entry.borrowed * entry.price,
        lent: entry.lent * entry.price,
    }));

    const totalRow = {
        id:'',
        date: 'Total',
        price: '',
        category: '',
        borrowed: totalBorrow,
        lent: totalLent,
    };
    const rowsWithTotal = [...rows, totalRow];

    return (
        <Wrapper>
            <>{console.log("==>",rowsWithTotal)}</>
            <Table columns={columns} rows={rowsWithTotal} />
        </Wrapper>
    );
};

export default Index;
