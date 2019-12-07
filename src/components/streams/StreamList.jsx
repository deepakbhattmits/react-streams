import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

const StreamList = props => {
    const [scroll, setScroll] = useState(false);
    const renderButton = list => {
        if (list.userId === props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${list.id}`} className="btn btn-primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${list.id}`} className="btn btn-danger">
                        Delete
                        </Link>
                </div>
            );
        }
    }

    const renderList = () => {
        return props.streams.map(list => {
            return (
                <div className="item" key={list.id}>
                    {renderButton(list)}

                    <i className="large middle aligned icon camera" />

                    <div className="content">
                        <Link to={`/streams/show/${list.id}`}>
                            {list.title}
                            <div className="description">
                                {list.description}
                            </div>
                        </Link>
                    </div>

                </div>
            );
        });
    }
    const trackScrolling = () => {
        setScroll(false)
    }
    const handleScroll = (e) => {
        const bottom = e.target.scrollTop;
        console.log(bottom)
        if (bottom > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    useEffect(() => {
        if (!props.streams.length) {
            props.fetchStreams();
        }
        document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener('scroll', trackScrolling);
        }
    }, [props])

    return (
        <div id='divScroll' className='listPage' onScroll={handleScroll} >
            <div className={`heading  ${scroll ? 'scrolled' : ''}`}>
                <label className='custom'>Streams</label>
            </div>
            <div className="ui celled list">
                {renderList()}

            </div>

        </div >
    );
}
const mapDispatchToProps = (dispatch) => ({
    fetchStreams: () => dispatch(fetchStreams()),
})
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(StreamList);