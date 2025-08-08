import { useState } from "react";
import Input from "../InputFields/input";
import "./post.css"
import { useDispatch } from "react-redux";
import { createPost } from "../../Redux/postSlice";

const MakePost = (props) => {
    const { setOpen } = props;
    const [title, setTitle] = useState("Add a title");
    const dispatch = useDispatch();
    const [desc, setDesc] = useState("Add some descriptions");
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
    const [selectedIdx, setSelectedIdx] = useState(0);
    const handlePost = () => {
        setOpen(false);
        const newPost = {
            title: title,
            description: desc,
            tag: selectedIdx
        };
        dispatch(createPost(newPost));
    };

    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input
                data={title}
                inputType="textarea"
                setData={setTitle}
                label="Title"
                classStyle="makepost-title">
            </Input>
            <Input
                data={desc}
                inputType="textarea"
                setData={setDesc}
                label="Description"
                classStyle="makepost-desc">
            </Input>
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag, idx) => {
                    return (
                        <button
                            key={idx}
                            className={`${selectedIdx === idx
                                ? `makepost-tags-selected`
                                : `makepost-tags-${tag}`
                                }`}
                            onClick={() => setSelectedIdx(idx)}
                        >
                            {tag}
                        </button>
                    )
                })}
            </div>
        </section>
    );
}

export default MakePost;