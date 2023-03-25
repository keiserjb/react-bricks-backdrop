import React, {createContext, useContext, useState} from "react";
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";



const BrickContext = createContext(null)

export const useBricks = () => useContext(BrickContext)

const normalizeBricks = (results, total_items, items_per_page, total_pages, current_page) => {
  console.log(results, total_items, items_per_page, total_pages, current_page);
  //  console.log(results[0]._field_data.nid.entity.path.alias);

  const bricks = []
  results.forEach(item => {
    // console.log(item);
    bricks.push({
      total_items: total_items,
      total_pages: total_pages,
      items_per_page: items_per_page,
      current_page: current_page,
      id: item.nid,
      title: item.node_title,
      path: item._field_data.nid.entity.path.alias,
      firstLine100: item.field_field_first_line_of_brick_100[0]?.raw.value,
      secondLine100: item.field_field_second_line_of_brick_100[0]?.raw.value,
      thirdLine100: item.field_field_third_line_of_brick_100[0]?.raw.value,
      background100: item.field_field_brick_background_100[0]?.raw.uri,
      firstLine500: item.field_field_first_line_of_brick_500[0]?.raw.value,
      secondLine500: item.field_field_second_line_of_brick_500[0]?.raw.value,
      thirdLine500: item.field_field_third_line_of_brick_500[0]?.raw.value,
      background500: item.field_field_brick_background_500[0]?.raw.uri,
      firstLine1000: item.field_field_first_line_of_brick_1000[0]?.raw.value,
      secondLine1000: item.field_field_second_line_of_brick_1000[0]?.raw.value,
      thirdLine1000: item.field_field_third_line_of_brick_1000[0]?.raw.value,
      fourthLine1000: item.field_field_fourth_line_of_brick_1000[0]?.raw.value,
      fifthLine1000: item.field_field_fifth_line_of_brick_1000[0]?.raw.value,
      background1000: item.field_field_brick_background_1000[0]?.raw.uri,
    })
  })
  console.log(bricks);
  return bricks
}



const fetchBricks = async (pageNumber, textSearch) =>  {
  const response = await fetch(`https://test-137a472c-153f916d-14c5c44b.app.devpanel.com/api/v2/views/walk_of_fame/decoupled?combine=${textSearch}&page=${pageNumber}`)
  //console.log(response);
  if (!response.ok) {
    throw new Error(`Network response was: ${response.status}`)
  }


  const { results, total_items, items_per_page, total_pages, current_page } = await response.json()
// console.log(results);
  return normalizeBricks(results, total_items, items_per_page, total_pages, current_page)
  //return results

}

const BrickProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [textSearch, setTextSearch] = useState('');
  const{ data, isLoading, isFetching } = useQuery( ['bricks', pageNumber, textSearch],
    () => fetchBricks( pageNumber, textSearch),
    {
      staleTime: 300000,
      keepPreviousData: true,
    })
  //console.log(data);
  if (isLoading) {
    return <div className="spinner-border m-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }

  const handleReset = ()=> {
    setTextSearch('');
    setPageNumber(0);
    // setPageCount(52);
    window.location.reload(false);
    //setPageCount(21);

  }
  const handlePageClick = async (data) => {
    //console.log(data.selected);
    //let currentPage = data.selected;
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    setPageNumber(data.selected)

  };

  console.log(data);
  //console.log(data.length);
  // console.log(Number(Math.ceil(data[0].total_items/data[0].items_per_page)));
  let pageCount = (data[0]?.total_pages) ?? 1;
  console.log(pageCount);
  if (data.length === 0) {
    return (
      <p>Search returned no results. Please try again.<br />
        <button onClick={handleReset} type="button" className="btn btn-primary btn-lg">Reset</button></p>
    )
  }
  return (
    <BrickContext.Provider value={data}>
      {isFetching && <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      <h1 className="text-center">AMA Walk of Fame</h1>
      <hr />
      <div className="container">
        <div className="row">

          <div className="col-md-6 text-center form-group brick-search">
            <label>Search by Brick message:&nbsp;</label><br />
            <input
              className="form-control form-control-lg bg-primary text-white"
              id="textSearch"
              type="text"
              name="textSearch"
              placeholder="Start typing ..."
              value={textSearch}
              //onChange={(event => setTextSearch(event.target.value.toLowerCase()))}
              onChange={(event => {setTextSearch(event.target.value.toLowerCase()) ; setPageNumber(0)})}

            />
          </div>

          <div className="col-md-6 text-center">
            <br />
            <button onClick={handleReset} type="button" className="btn btn-primary btn-lg">Reset</button>
          </div>
        </div>
      </div>
      <hr/>
      {children}

      <div>


        <br />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex-wrap justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          forcePage={pageNumber}
        />

      </div>
      <br />
      {isFetching && <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      <br />
    </BrickContext.Provider>
  )
}



export default BrickProvider
