import React from 'react'
import cx from 'classnames'
import * as ActionType from '../Constant/ActionTypes'
import { connect } from  'react-redux'
import * as  actions from  '../Action/Todo'

const VisibilityFilters = ({activeFilter,actionFilter}) => {
    
   const handleSubmit = () => {
        actionFilter("completed");
    } 
   
   const handleFilter = (filter) =>
    {
        actionFilter(filter)
    }
    return (
        <div className="visibility-filters">
            {Object.keys(ActionType.VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = ActionType.VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                          )}
                        onClick ={() => handleFilter(filterKey)}  
                    >
                       {currentFilter}
                     
                    </span>
                )
            })}
            <button onClick={handleSubmit}>Test</button>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        activeFilter: state.VisibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actionFilter  : (filter) => dispatch(actions.setFilter(filter)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VisibilityFilters);
