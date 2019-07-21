import * as React from 'react';
import {catchers, pitchers, PlayerI} from "./data";

interface PlayerProps {
    player: PlayerI,
    onDelete: () => void
}

const Player = (props: PlayerProps) =>
    <tr>
        <td className={"x-button"}>
            <button onClick={props.onDelete}>X</button>
        </td>
        <td className={"position"}>{props.player.position}</td>
        <td className={"player-attribute"}>{props.player.name}</td>
        <td className={"player-attribute"}>{props.player.projected}</td>
        <td className={"player-attribute"}>{props.player.price}</td>
    </tr>;

const SinglePositionPlayer = ({initial}: { initial: PlayerI[] }) => {
    const [playerNum, setPlayerNum] = React.useState<number>(0);
    const player = initial[playerNum];

    return <Player player={player}
                   onDelete={() => setPlayerNum((playerNum + 1) % initial.length)}
    />
};

const DFSHeader = () =>
    <tr>
        <th className={"x-button"}>
        </th>
        <th className={"position"}>position</th>
        <th className={"player-attribute"}>name</th>
        <th className={"player-attribute"}>projected</th>
        <th className={"player-attribute"}>price</th>
    </tr>

export const DFS = () =>
    <table id={"dfs"}>
        <DFSHeader/>
        <SinglePositionPlayer initial={pitchers}/>
        <SinglePositionPlayer initial={catchers}/>
    </table>;