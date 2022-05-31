/** @format */

import { useState, useRef, useEffect, useCallback } from "react";
import { data } from "../../db/raw";
import { Button } from "react-bootstrap";
import TableModal from "../TableModal";
import { ReactComponent as DownArrowSVG } from "../../assets/images/icon-down-arrow.svg";
import { ReactComponent as UpArrowSVG } from "../../assets/images/icon-up-arrow.svg";
import WithoutHeader from "./WithoutHeader";
import WidgetHeaderWithButtons from "../reusable/WidgetHeaderWithButtons";

const makeDefaultState = () => ({
  sorted: [],
  page: 0,
  pageSize: 5,
  expanded: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} },
  resized: [],
  resizable: true,
  showPagination: false,
  defaultPageSize: 10,
  // filtered: []
});

const Table = () => {
  const table = useRef();
  const [state] = useState(makeDefaultState());
  const [selectAll, setSelectAll] = useState(false);
  const [selection, setSelection] = useState([]);
  const [sortDesc, setSortDesc] = useState({});
  const [selectedData, setSelectedData] = useState([]);
  const [scroll, setScroll] = useState(0);

  const [active, setActive] = useState(false);
  const handlePivot = (pivot) => {
    // console.log('handlePivot    :    > ', pivot);
    const selectall = selectAll ? false : true;
    let selection = [];
    if (selectall) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = table.current.dataFunc();
      // the 'data' property contains the currently accessible records based on the filter and sort
      // const currentRecords = wrappedInstance.props.data;
      const currentRecords = wrappedInstance;
      // we just push all the IDs onto the selection array
      currentRecords.forEach((item) => {
        // selection.push(item.id);
        selection = [...selection, item.id];
      });
    }
    setSelectAll(selectall);
    setSelection(selection);
  };
  const handleModal = () => {
    // console.log('T : ', selection);
    let selected = {};
    if (selection.length > 0) {
      selected = selection.map((el) =>
        data.filter((item) => {
          return item.id === el;
        })
      );
      setSelectedData(selected);
    } else {
      return false;
    }
    setActive(true);
  };
  const handleClearSelection = () => {
    if (selection.length === data.map((el) => el.id).length) {
      toggleAll();
    } else {
      setSelection([]);
    }
  };

  const toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selectionA = [...selection];
    const keyIndex = selectionA.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selectionA = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1),
      ];
    } else {
      // it does not exist so add it
      selectionA = [...selectionA, +key];
    }
    // update the state
    setSelection(selectionA);
  };

  const toggleAll = () => {
    /*
      'toggleAll' is a tricky concept with any filterable table
      do you just select ALL the records that are in your data?
      OR
      do you only select ALL the records that are in the current filtered data?
      
      The latter makes more sense because 'selection' is a visual thing for the user.
      This is especially true if you are going to implement a set of external functions
      that act on the selected information (you would not want to DELETE the wrong thing!).
      
      So, to that end, access to the internals of ReactTable are required to get what is
      currently visible in the table (either on the current page or any other page).
    */
    const selectall = selectAll ? false : true;
    let selection = [];
    if (selectall) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = table.current.dataFunc();
      // the 'data' property contains the currently accessible records based on the filter and sort
      // const currentRecords = wrappedInstance.props.data;
      const currentRecords = wrappedInstance;
      // we just push all the IDs onto the selection array
      currentRecords.forEach((item) => {
        // selection.push(item.id);
        selection = [...selection, item.id];
      });
    }
    setSelectAll(selectall);
    setSelection(selection);
    // disabledFunc();
  };

  const isSelected = (key) => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return selection.includes(key);
  };

  const sortFunction = (e) => {
    /*
			Get the clicked element 'id' and 'desc' for add class in icon
		*/
    let sortDesc = { [e[0].id]: e[0].desc };
    setSortDesc(sortDesc);
  };
  const disableFunc = useCallback(() => {
    /*
		check length of selection item 
		*/
    return !!selection.length;
  }, [selection]);
  const actions = () => (
    <div className="ui buttons">
      <button
        className="ui button"
        onClick={() => {
          setActive(false);
        }}
      >
        Cancel
      </button>
      <div className="or"></div>
      <button
        className="ui positive button active"
        onClick={() => {
          // something else want to do
          setActive(false);
        }}
      >
        Okay
      </button>
    </div>
  );

  useEffect(() => {
    disableFunc();
  }, [disableFunc]);
  useEffect(() => {
    const handleScroll = (e) => {
      let scrollLeft = e.target.scrollLeft;

      setScroll(scrollLeft);
    };
    const elem = document.querySelector(".rt-table");

    if (elem) {
      elem.addEventListener("scroll", handleScroll, false);
    }
    return {
      if(elem) {
        elem.removeEventListener("scroll", handleScroll, false);
      },
    };
  }, []);
  useEffect(() => {
    // const body = document.querySelector('body');
    document.body.classList.toggle("modal-page", active);
    document.body.classList.toggle("pushable", active);
    document.body.classList.toggle("dimmable", active);
    document.body.classList.toggle("dimmed", active);
    // if (active) {
    // 	body.classList.add('modal-page pushable dimmable dimmed');
    // } else {
    // 	body.classList.remove('modal-page pushable dimmable dimmed');
    // }
  }, [active]);
  return (
    <div className="main-page">
      <WidgetHeaderWithButtons title="Incidents">
        <div className="actions">
          {disableFunc() && (
            <>
              <Button
                variant="outline-secondary"
                onClick={handleClearSelection}
              >
                Clear Selection
              </Button>
              <Button variant="outline-secondary" onClick={handleModal}>
                Open All
              </Button>
            </>
          )}
        </div>
      </WidgetHeaderWithButtons>

      <WithoutHeader
        ref={table}
        data={data}
        onSortedChange={(e) => {
          sortFunction(e);
        }}
        columns={[
          {
            Header: (rowInfo) => {
              return (
                <div onClick={toggleAll}>
                  <span>Select</span>
                </div>
              );
            },
            sortable: false,
            resizable: false,
            width: 100,
            style: {
              textAlign: "center",
            },
            className: "-cursor-pointer",
            Cell: (cell) => {
              return (
                <>
                  <input
                    id={!!cell.original && cell.original.id}
                    type="checkbox"
                    checked={
                      isSelected(!!cell.original && cell.original.id) &&
                      selection.includes(!!cell.original && cell.original.id)
                    }
                    onClick={(e) => {
                      const { shiftKey } = e;
                      e.stopPropagation();
                      toggleSelection(
                        !!cell.original && cell.original.id,
                        shiftKey,
                        cell
                      );
                    }}
                    onChange={() => {}}
                  />
                </>
              );
            },
          },
          {
            accessor: "name",
            Aggregated: (row) => {
              return <span>{row.value}</span>;
            },
            width: 450,
            Header: (rowInfo) => {
              return (
                <>
                  <span>Name</span>
                  <DownArrowSVG
                    className={`icon down --arrow ${
                      sortDesc["name"] ? "active" : ""
                    }`}
                  />

                  <UpArrowSVG
                    className={`icon up --arrow ${
                      sortDesc["name"] ? "" : "active"
                    }`}
                  />
                </>
              );
            },
          },
          {
            id: "postId",
            sortable: false,
            className: `group`,
            accessor: (d) => d.postId,
            style: { textTransform: "capitalize" },
            width: 170,
            Expander: ({ isExpanded, ...rest }) => {
              return <div>{isExpanded ? <span /> : <span />}</div>;
            },
            PivotValue: (row) => (
              <span
                className="test"
                onClick={handlePivot}
                style={{ left: scroll, position: "relative" }}
              >
                {row.value}
              </span>
            ),
            Aggregated: (row) => {
              return <span className="thisis">{row.value}</span>;
            },
          },

          {
            // Header: 'Age',
            accessor: "email",
            width: 150,
            Aggregated: (row) => {
              return <span>{row.value}</span>;
            },
            Header: (rowInfo) => {
              return (
                <>
                  <span>Email</span>

                  <DownArrowSVG
                    className={`icon down --arrow ${
                      sortDesc["email"] ? "active" : ""
                    }`}
                  />

                  <UpArrowSVG
                    className={`icon up --arrow ${
                      sortDesc["email"] ? "" : "active"
                    }`}
                  />
                </>
              );
            },
          },
        ]}
        minWidth={100}
        showPagination={state.showPagination}
        pivotBy={["postId"]}
        // filterable
        defaultPageSize={state.defaultPageSize}
        className="react-table"
        // Controlled props
        resizable={state.resizable}
        sortable
        // sorted={this.state.sorted}
        page={state.page}
        pageSize={state.pageSize}
        expanded={state.expanded}
        selection={selection}
        // resized={this.state.resized}
        // filtered={this.state.filtered}
        // Callbacks
        // onSortedChange={sorted => this.setState({ sorted })}
        // onPageChange={page => this.setState({ page })}
        // onPageSizeChange={(pageSize, page) =>
        //   this.setState({ page, pageSize })
        // }
        // onExpandedChange={expanded => this.setState({ expanded })}
        // onResizedChange={resized => this.setState({ resized })}
        // onFilteredChange={filtered => this.setState({ filtered })}
        // defaultFilterMethod={(filter, row, column) => {
        //   const id = filter.pivotId || filter.id;
        //   return row[id] !== undefined
        //     ? String(row[id])
        //         .toLowerCase()
        //         .indexOf(filter.value.toLowerCase()) !== -1
        //     : true;
        // }}
      />
      <TableModal
        title="selected data"
        content={selectedData}
        active={active}
        actions={actions()}
        onDismiss={() => {
          setActive(false);
        }}
      />
    </div>
  );
};
export default Table;
