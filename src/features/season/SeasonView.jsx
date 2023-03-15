import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSeasons } from './seasonSlice'
import AddSeasonDialogue from './AddSeasonDialogue'
import { RiDeleteBinLine } from "react-icons/ri";
import {Table, Button} from 'react-bootstrap'
import DeleteSeason from './DeleteSeason'
import EditSeasonDialogue from './EditSeasonForm'
import { BiEditAlt } from "react-icons/bi";
import { RoundView } from '../rounds/RoundView';
import { useNavigate } from 'react-router-dom';


export const SeasonView = () => {
  
  const season=useSelector((state)=>state.season)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchSeasons())
  },[])


  const [open,setOpen]=useState(false)
  const [openDelete,setOpenDelete]=useState(false)
  const [DeleteId,SetDeleteId]=useState(0)
  const [openEdit,setOpenEdit]=useState(false)
  const [EditId,SetEditId]=useState(0)
  const navigate = useNavigate();



  function handleDelete(id){
    setOpenDelete(true)
    SetDeleteId(id)
  }

  function handleEdit(id){
    setOpenEdit(true)
    SetEditId(id)
  }

  const seasonDashboard=(season_id,season_year)=>{
    navigate(`/Season/${season_id}/${season_year}`)
  }


  
  return (
    <div>
      <h1>SeasonList</h1>
      <AddSeasonDialogue open={open} setOpen={setOpen} />
      <DeleteSeason open={openDelete} setOpen={setOpenDelete} deleteId={DeleteId} setDeleteId={SetDeleteId}/>
      <EditSeasonDialogue open={openEdit} setOpen={setOpenEdit} editId={EditId} setEditId={SetEditId}/>
      <button onClick={()=>setOpen(true)}>Add Season</button>
      {season.loading && <div>Loading...</div>}
      {!season.loading && season.error ? <div>Error: {season.error}</div> : null}
      {(!season.loading && season.seasons.length) ? (
        <table className = "table table-striped table-bordered">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            season.seasons.slice(0).reverse().map(season=>{
                    return <tr key={season.Id}>
                      <td>{season.Id}</td>
                      <td><Button variant="outline-secondary" onClick={()=>(seasonDashboard(season.Id,season.year))}>{season.year}</Button></td>
                      <td><button onClick={()=>(handleDelete(season.Id))}><RiDeleteBinLine/></button>
                      <button onClick={()=>(handleEdit(season.Id))}><BiEditAlt/></button></td>
                      
                    </tr>
              
            })
          }
        </tbody>
        </table>
      ): null}
    </div>
  )
}
