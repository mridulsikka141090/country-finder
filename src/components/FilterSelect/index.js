import React from 'react'
import { filterRegions } from '../../constants';

const FilterSelect = ({ filterSelected, onFilterSelect })  => {
    return <div>
        <select className="select" value={filterSelected} onChange={onFilterSelect}>
           {filterRegions.map(filter => {
            return <option>{filter}</option>
           })}
        </select>
    </div>
}

export default FilterSelect;