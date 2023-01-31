import React from 'react';

export default function Post ({ params}) {
    const { id } = params;
    return (
        <h1>Post Individual: {id}</h1>
    )
}
