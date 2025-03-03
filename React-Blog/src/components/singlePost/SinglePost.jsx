import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Mohib</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ex
          aliquid fuga veniam sed corporis, nisi repudiandae alias,
          reprehenderit optio incidunt maxime molestiae distinctio! Laudantium
          asperiores nemo tempore repellat voluptas. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolore, ex aliquid fuga veniam sed
          corporis, nisi repudiandae alias, reprehenderit optio incidunt maxime
          molestiae distinctio! Laudantium asperiores nemo tempore repellat
          voluptas. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolore, ex aliquid fuga veniam sed corporis, nisi repudiandae alias,
          reprehenderit optio incidunt maxime molestiae distinctio! Laudantium
          asperiores nemo tempore repellat voluptas. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolore, ex aliquid fuga veniam sed
          corporis, nisi repudiandae alias, reprehenderit optio incidunt maxime
          molestiae distinctio! Laudantium asperiores nemo tempore repellat
          voluptas. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolore, ex aliquid fuga veniam sed corporis, nisi repudiandae alias,
          reprehenderit optio incidunt maxime molestiae distinctio! Laudantium
          asperiores nemo tempore repellat voluptas.
        </p>
      </div>
    </div>
  );
}
