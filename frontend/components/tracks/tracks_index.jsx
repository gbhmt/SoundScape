import React from 'react';
import { userModalStyle } from '../../util/modal_styles.js';
import TrackFormContainer from './track_form_container.js';
import TrackIndexItemContainer from './track_index_item_container.js';
import Modal from 'react-modal';


class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, modalTrack: null };
    this.handleModal = this.handleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    if (!this.props.tracks[0]) {
      this.props.fetchAllTracks(1);
    }
  }

  handleModal (track) {
    this.setState({ modalOpen: true, modalTrack: track });
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  render () {
    const { currentPage, numPages, tracks, fetchAllTracks } = this.props
    if (tracks[0]) {
      const allTracks = tracks.map((track, idx) => {
        return <TrackIndexItemContainer key={ idx } track={ track } handleModal={ this.handleModal } />;
      });
      let nextPage;
      if (currentPage < numPages) {
        nextPage =
        <button className="next-page"
        onClick={ () => fetchAllTracks(currentPage + 1) }>
        See more
        </button>
        ;
      }
      return (
        <div className="tracks-index-container">
          <div className="tracks-index-items">
            <ul className="tracks-index">
              { allTracks }
            </ul>
            { nextPage }
            <Modal
              isOpen={ this.state.modalOpen }
              onRequestClose={ this.closeModal }
              style={ userModalStyle }>

              <TrackFormContainer track={ this.state.modalTrack } closeModal={ this.closeModal } />
            </Modal>
          </div>
        </div>
        );
    } else {
      return <h1>...</h1>;
    }
  }
}

export default TracksIndex;
