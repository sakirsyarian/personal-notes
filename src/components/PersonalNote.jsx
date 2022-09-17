import React from "react";
import Navbar from "./Navbar";
import FormInput from "./FormInput";
import BodySection from "./BodySection";
import { getInitialData } from '../utils/data'

class PersonalNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: getInitialData(),
      search: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddDatasHandler = this.onAddDatasHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter(data => data.id !== id);
    this.setState({ datas });
  }

  onSearchHandler(event) {
    const captureValue = event.target.value.toLowerCase();
    this.setState({ search: captureValue })
    event.preventDefault();
  }

  onActiveHandler(id) {
    const notesActive = this.state.datas.filter((note) => note.id === id);
    const activeNotes = (notesActive[0].archived = true);
    this.setState({ activeNotes });
  }

  onArchiveHandler(id) {
    const notesArchive = this.state.datas.filter((note) => note.id === id);
    const undoNotes = (notesArchive[0].archived = false);
    this.setState({ undoNotes });
  }

  onAddDatasHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    const searchDatas = !this.state.search ? this.state.datas : this.state.datas.filter(data => data.title.toLowerCase().match(this.state.search));
    const activeDatas = searchDatas.filter(data => data.archived === false);
    const archiveDatas = searchDatas.filter(data => data.archived === true);

    return (
      <React.Fragment>
        <Navbar onSearch={this.onSearchHandler} />
        <FormInput addDatas={this.onAddDatasHandler} />
        <BodySection onDelete={this.onDeleteHandler} activeDatas={activeDatas} archiveDatas={archiveDatas} onActive={this.onActiveHandler} onArchive={this.onArchiveHandler} />
      </React.Fragment>
    )
  }
}

export default PersonalNote;
