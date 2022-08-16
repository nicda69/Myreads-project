import React, {Component} from "react";
import Shelf from '../components/Shelf';
import Search from '../components/Search';
import {getAll} from "../BooksAPI";

export default class Homepage extends Component {
    async componentDidMount() {
        try {
            const books = await getAll();
            console.log(books)
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title="Currently Reading"/>
                    <Shelf title="Want to Read"/>
                    <Shelf title="Read"/>
                </div>
                <Search/>
            </div>
        );
    }
}