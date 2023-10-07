import React, { useState } from "react"

const Reaction: any = {
    Like: "like",
    Dislike: "dislike"
}

export const Social = () => {
    const [reactionCounts, setReactionCounts] = useState({
        [Reaction.Like]: 100,
        [Reaction.Dislike]: 25
    })
    const [reactionState, setReactionState] = useState<any>(
        Object.values(Reaction).reduce((previous: any, current: any) => ({
            ...previous,
            [current]: false
        }), {}))

    const onClick = (event: any) => {
        const { target: { name } } = event
        const otherClickedReaction: any = Object.entries(reactionState).filter(([reaction, value]) => reaction !== name && value)
        const isOtherReactionClicked = otherClickedReaction.length > 0
        const temp = isOtherReactionClicked
            ? ({ [otherClickedReaction[0][0]]: reactionCounts[otherClickedReaction[0][0]] - 1 })
            : ({})

        if (reactionState[name]) {
            setReactionCounts((prevState) => ({
                ...prevState,
                ...temp,
                [name]: prevState[name] - 1
            }))
        } else {
            setReactionCounts((prevState) => ({
                ...prevState,
                ...temp,
                [name]: prevState[name] + 1
            }))
        }

        setReactionState((prevState: any) => ({
            ...prevState,
            ...(isOtherReactionClicked ? { [otherClickedReaction[0][0]]: false } : {}),
            [name]: !prevState[name]
        }))
    }

    return (
        <>
            <div>
                <button
                    // className={cx({ "like-button": true, "liked": reactionState[Reaction.Like] })}
                    name={Reaction.Like}
                    onClick={onClick}
                >
                    Like | <span className="likes-counter">{reactionCounts[Reaction.Like]}</span>
                </button>
                <button
                    //  className={cx({ "dislike-button": true, "disliked": reactionState[Reaction.Dislike] })}
                    name={Reaction.Dislike}
                    onClick={onClick}
                >
                    Dislike | <span className="dislikes-counter">{reactionCounts[Reaction.Dislike]}</span>
                </button>
            </div>
            <style>{`
                        .like-button, .dislike-button {
                            font-size: 1rem;
                            padding: 5px 10px;
                            color:   #585858;
                        }
    
                        .liked, .disliked {
                            font-weight: bold;
                            color: #1565c0;
                        }
                    `}</style>
        </>
    );

}