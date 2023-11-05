"use client";
import axios from "axios";
import React, { useCallback, useMemo } from "react";

import useFavorites from "@/hooks/useFavorites";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import useCurrentUser from "@/hooks/useCurrentUser";

interface FavoriteButtonProps {
    vodId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ vodId }) => {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list: string[] = currentUser?.currentUser?.favoriteIds ?? [];

        return list.includes(vodId);
    }, [currentUser, vodId]);

    const toggleFavorites = useCallback(async () => {
        let response;
        if (isFavorite) {
            response = await axios.delete("/api/favorite", { data: { vodId } });
            response = response.data.updatedUser;
        } else {
            response = await axios.post("/api/favorite", { vodId });
            response = response.data.user;
        }

        const updatedFavoriteIds = response?.favoriteIds;
        mutate({
            ...currentUser.currentUser,
            favoriteIds: updatedFavoriteIds,
        });
        mutateFavorites();
    }, [vodId, isFavorite, currentUser, mutate, mutateFavorites]);

    const Icon = isFavorite ? BsFillHeartFill : BsHeart;

    return (
        <div
            onClick={toggleFavorites}
            className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 hover:bg-neutral-300  rounded-full flex items-center justify-center transition duration hover:border-neutral-300"
        >
            <Icon className="text-red-500 w-2.5" />
        </div>
    );
};
export default FavoriteButton;
