"use client";
import axios from "axios";
import React, { useCallback, useMemo } from "react";

import useFavorites from "@/hooks/useFavorites";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { curry } from "lodash";
import useCurrentUser from "@/hooks/useCurrentUser";

interface FavoriteButtonsProps {
    vodId: string;
}

const FavoriteButtons: React.FC<FavoriteButtonsProps> = ({ vodId }) => {
    const { data: currentUser, mutate } = useCurrentUser();

    const { mutate: mutateFavorites } = useFavorites();
    const isFavorite = useMemo(() => {
        const list: string[] = currentUser?.currentUser?.favoriteIds ?? [];
        console.log(list);
        console.log(list.includes(vodId));

        return list.includes(vodId);
    }, []);

    const toggleFavorites = useCallback(async () => {
        let response;
        if (isFavorite) {
            console.log("is?: ", isFavorite);
            console.log("USER BEFORE AXIOS:", currentUser.currentUser);
            response = await axios.delete("/api/favorite", { data: { vodId } });
            response = response.data.updatedUser;
            console.log("USER AFTER AXIOS:", response);
        } else {
            console.log("USER BEFORE AXIOS:", currentUser.currentUser);
            response = await axios.post("/api/favorite", { vodId });
            response = response.data.user;
            console.log("USER AFTER AXIOS:", response);
        }

        const updatedFavoriteIds = response?.favoriteIds;
        console.log("upidds: ", updatedFavoriteIds);
        console.log({ ...currentUser.currentUser });

        // mutate({
        //     ...currentUser.currentUser,
        //     favoriteIds: updatedFavoriteIds,
        // });
        currentUser.currentUser.favoriteIds = updatedFavoriteIds;
        mutateFavorites();
        console.log("USER AFTER MUTATE:", currentUser);
    }, [vodId, isFavorite, currentUser, mutate, mutateFavorites]);

    const Icon = isFavorite ? BsFillHeartFill : BsHeart;

    return (
        <div
            onClick={toggleFavorites}
            className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex items-center justify-center transition duration hover:border-neutral-300"
        >
            <Icon className="text-red-500 w-2.5" />
        </div>
    );
};
export default FavoriteButtons;
