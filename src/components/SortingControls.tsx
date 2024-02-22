import React from "react";
import "./SortingControls.css";

interface ISortingContolsProps {
    sortPreference: "none" | "title" | "rating";
    onSortChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SortingControls({sortPreference, onSortChange}: ISortingContolsProps) {
    return (
        <div className="sorting-controls">
            Sort: 
        <label>
          A-Z
          <input
            type="checkbox"
            name="title"
            checked={sortPreference === 'title'}
            onChange={onSortChange}
          />
        </label>
        <label>
          Rating
          <input
            type="checkbox"
            name="rating"
            checked={sortPreference === 'rating'}
            onChange={onSortChange}
          />
        </label>
      </div> 
    )
}