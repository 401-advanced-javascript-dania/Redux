import React from 'react';
import { connect } from 'react-redux';
import { render, reset } from '../store/reducer-action.js';
const Update = props => {
  console.log('here',props);
  return (
    <article>

      <ul>
        {props.action.categories.map((data, idx) => {
          return <li onClick={() => props.render(data.displayName)} key={idx}>
            {data.displayName},  {data.normalizedName},  {data.description}
          </li>;
        })
        }
      </ul>

      {/* 
            { <ul>
                {props.action.products.map((data, idx) => {
                    return <li onClick={() => props.render(data.categoryAassociation)} key={idx}>
                        {data.categoryAassociation},  {data.name},  {data.description}, {data.price}, {data.inventoryCount}
                    </li>
                })
                }
            </ul> } */}


    </article>
  );
};
const mapStateToProps = state => ({
  action: state.action,
});

const mapDispatchToProps = { render, reset };
export default connect(mapStateToProps, mapDispatchToProps)(Update);

