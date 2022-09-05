import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import '../styles/Tab3.css';
import BlogsCard from './BlogsCard';

export default function Tab3() {

    const baseURL = "https://public-api.wordpress.com/rest/v1.1/sites/prashant416368327.wordpress.com/posts/";
    const [data, setData] = useState({ isLoading: true, notFetched : false ,blogs: Array() })

    var PostData = Array();

    useEffect(() => {
        if (data.isLoading) {
            fetch(baseURL).then(resp => resp.json()).then((response) => {
                console.log('called', response);
                if (response) {
                    let blogPosts = response.posts;
                    // console.log(blogPosts);
                    if (Array.isArray(blogPosts)) {
                        PostData = [];
                        blogPosts.forEach(element => {
                            let title_img;
                            for (let key in element.attachments) {
                                title_img = element.attachments[key].URL;
                            }
                            PostData.push({
                                "id": element.ID,
                                "title": element.title,
                                "image": title_img,
                                "readingTime": "3 Min Read",
                                "view": "232 View",
                                "comment": "02 Comments",
                                "details": element.excerpt,
                                "content": element.content
                            })
                        });
                    }
                    setData({ isLoading: false, notFetched: false, blogs: PostData });
                } else {
                    //not fetched
                    setData({ isLoading: false, notFetched: true, blogs: PostData });
                }

            }).catch((error) => {
                console.log(error);
                setData({ isLoading: false, notFetched: true, blogs: PostData });
            });

        }
    }, [data.isLoading])

    return (
        <div className="tab3--parent">
            <Helmet>
                <title>Blogs</title>
                <meta name="description" content='page related cotent' />
                <link rel='canonical' href='/tab3' />
            </Helmet>

            <div className='blogs'>
                { data.isLoading ? <p>Loading...</p>:
                    data.blogs.map((post, i) => (
                        <Link key={i} to={`/blogDetails/${post.id}`} state={post}><BlogsCard key={i} data={post} /></Link>
                    ))
                }
                {
                    data.notFetched && <p>Error in fetching posts.</p>
                }
            </div>
        </div>
    )
}