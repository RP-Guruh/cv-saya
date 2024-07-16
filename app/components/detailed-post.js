import Component from '@glimmer/component';

export default class DetailedPostComponent extends Component {

    get recentPost() {
        let listRecentPost = [
            {
                title: "Judul Berita 1",
                shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                id: 1
            }, 
            {
                title: "Judul Berita 2",
                shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                id: 2
            }, 
            {
                title: "Judul Berita 3",
                shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                id: 3
            }, 
            {
                title: "Judul Berita 4",
                shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                id: 4
            }, 
            {
                title: "Judul Berita 5",
                shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                id: 5
            }, 
            {
                title: "Judul Berita 6",
                shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                id: 6
            }, 

        ];

        return listRecentPost;
    }
}