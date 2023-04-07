import React from 'react';
import styled from 'styled-components';
import RadioInput from "./RadioInput"
const Navigation = (props) => {

  return(
    <nav>
      <ul className='main-menu'>
        <li className='main-menu-element'>Events
          <div className='sub-menu'>
            <form>
                <div className='by-type'>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_type' value='tags_search=Teatteri' onChange={props.handleChange}/>
                      <span>Perfomances</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_type' value='tags_search=music' onChange={props.handleChange}/>
                      <span>Music</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <input type='radio' name='filter_type' value='tags_search=families' onChange={props.handleChange}/>
                      <span>Families</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <input type='radio' name='filter_type' value='tags_search=games' onChange={props.handleChange}/>
                      <span>Games</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <input type='radio' name='filter_type' value='tags_search=sports' onChange={props.handleChange}/>
                      <span>Sports</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <input type='radio' name='filter_type' value='tags_search=dance' onChange={props.handleChange}/>
                      <span>Dance</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <input type='radio' name='filter_type' value='tags_search=exhibitions' onChange={props.handleChange}/>
                      <span>Exhibitions</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <input type='radio' name='filter_type' value='tags_search=architecture' onChange={props.handleChange}/>
                      <span>Architecture</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <input type='radio' name='filter_type' value='tags_search=fishing' onChange={props.handleChange}/>
                      <span>fishing</span>
                    </label>
                  </li>
                </div>
                <div className='by-language-header'>
                  <i className="fas fa-language"></i>
                </div>
                <div className='by-language'>
                  <li>
                    <label className='filter-button'>
                      <RadioInput name='filter_lang' value='language_filter=fi' onChange={props.handleChange} />
                      <span>Suomi</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_lang' value='language_filter=sv' onChange={props.handleChange} />
                      <span>Svenska</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_lang' value='language_filter=en' onChange={props.handleChange} />
                      <span>English</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_lang' value='language_filter=ru' onChange={props.handleChange} />
                      <span>Русский</span>
                    </label>
                  </li>
                </div>
                <div className='by-distance-header'>
                  <i className="fas fa-road"></i>
                </div>
                <div className='by-distance'>
                  <li>
                    <label className='filter-button'>
                      <RadioInput name='filter_distance' value='1' onChange={props.handleChange} />
                      <span>1 km</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_distance' value='5' onChange={props.handleChange} />
                      <span>5 km</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_distance' value='10' onChange={props.handleChange} />
                      <span>10 km</span>
                    </label>
                  </li>
                  <li>
                    <label className='filter-button'>
                      <RadioInput type='radio' name='filter_distance' value='15' onChange={props.handleChange} />
                      <span>15 km</span>
                    </label>
                  </li>
                </div>
              <button id='apply-filter' onClick={props.handleSubmit}>Apply</button>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
