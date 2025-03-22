import React,{useState} from 'react'
import SideBar from '../components/SideBar'
import { 
  Box,
  Breadcrumbs,
  Button,
   Grid2,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Expenses = () => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleEditOpen = () => {
      setEditOpen(true);
    };
    const handleEditClose = () => {
      setEditOpen(false);
    };
    // Delete modal open and close
    const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => {
      setDeleteOpen(true);
    };
    const handleDeleteClose = () => {
      setDeleteOpen(false);
    };
  
    // View Modal open and close
    const [viewOpen, setViewOpen] = useState(false);
    const handleViewOpen = () => {
      setViewOpen(true);
    };
    const handleViewClose = () => {
      setViewOpen(false);
    };
      // Tab panel in view modal
  const [activeTab, setActiveTab] = useState("Expense Details");
  
  return (
 <div>
  <SideBar>
    <div className="mx-6">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to={'/'}>
          Dashboard
        </Link>

        <Typography sx={{ color: "text.primary" }}>Expenses</Typography>
      </Breadcrumbs>
    </div>
    <div className="flex flex-row flex-wrap place-content-between px-6 gap-x-2 gap-y-4">
          <div>
            <h4 className="text-2xl font-bold">Expenses</h4>
          </div>
          <div>
            <button onClick={handleOpen} className='bg-[var(--primary1)] text-white px-4 py-2 rounded-[5px] cursor-pointer hover:bg-[var(--primary2)] shadow-[2px_2px_5px] hover:shadow-gray-400 transition-all'>
               <AddIcon /> Add Expenses
            </button>
          </div>
    </div>
    <div className="m-6 mt-8 flex flex-row flex-wrap items-center justify-center ">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Expense Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Purchased by</TableCell>
                  <TableCell>Purchased from</TableCell>
                  <TableCell>Amount</TableCell>
                 
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Expense 1</TableCell>
                  <TableCell>24/02/25</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    In, commodi.
                  </TableCell>
                  <TableCell>User 1</TableCell>
                  <TableCell>Vendor 1</TableCell>
                  <TableCell>32561</TableCell>
                 
                  <TableCell>
                  <IconButton onClick={handleViewOpen} aria-label="edit" color="success" >
                    <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton onClick={handleEditOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>

                    <IconButton onClick={handleDeleteOpen} aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Expense 2</TableCell>
                  <TableCell>28/03/26</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    In, commodi.
                  </TableCell>
                  <TableCell>User 2</TableCell>
                  <TableCell>Vendor 2</TableCell>
                  <TableCell>32561</TableCell>
              
                  <TableCell>
                    <IconButton onClick={handleViewOpen} aria-label="edit" color="success" >
                    <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton onClick={handleEditOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>

                    <IconButton onClick={handleDeleteOpen} aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
         {/*Add Project MODAL */}

         <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="overflow-scroll h-[85vh] md:h-[38.5rem] no-scrollbar">
              <div className="h-fit">
                <h5 className=" text-2xl font-bold">Update Expense</h5>
                <form
                  action=""
                  className="addProject mt-8 flex flex-col gap-y-2"
                >
                  <Grid2 container spacing={2} className="w-full">
                    {/* Expense Name */}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="expenseName">ExpenseName</label>
                      <input
                        type="text"
                        required
                        placeholder="Expense Name"
                        name="expenseName"
                        id="expenseName"
                      />
                      </Grid2>
                      {/* Expense Date */}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="expenseDate">Date</label>
                      <input
                        type="date"
                        required
                        placeholder="Expense Date"
                        name="expenseDate"
                        id="expenseDate"
                      />
                      <small></small>
                      </Grid2>
                      </Grid2>
                      <Grid2 container spacing={2} className="w-full">
                        {/* Expense Purchased by */}
                        <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                          <label htmlFor='purchasedBy'>Purchased By</label>
                          <select name="purchasedby" id="purchasedby" className=''>
                        <option value="">Select</option>
                        <option value="">User 1</option>
                        <option value="">User 2</option>
                        <option value="">User 3</option>
                      </select>
                      <small></small>
                        </Grid2>
                        {/* Expense Purchased from */}
                        <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                          <label htmlFor='purchasedfrom'>Purchased From</label>
                          <select name="purchasedFrom" id="purchasedFrom" className=''>
                        <option value="">Select</option>
                        <option value="">Vendor 1</option>
                        <option value="">Vendor 2</option>
                        <option value="">Vendor 3</option>
                      </select>
                      <small></small>
                        </Grid2>
                      </Grid2>
                      <Grid2 container spacing={2} className="w-full">
                        {/* Expense Amount */}
                        <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="amount">Amount</label>
                      <input
                        type="text"
                        required
                        placeholder="Amount"
                        name="Amount"
                        id="Amount"
                      />
                      <small></small>
                      </Grid2>
                      {/* Expense Bank account */}
                      <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                          <label htmlFor='bankAccount'>Bank Account</label>
                          <select name="bankAccount" id="bankAccount" className=''>
                        <option value="">Select</option>
                        <option value="">23456787654</option>
                        <option value="">43565734325</option>
                        <option value="">12344563345</option>
                      </select>
                      <small></small>
                        </Grid2>
                      </Grid2>
                      {/* Expense Description */}
                      <div className="w-full inputData">
                    <label htmlFor="Description">Description</label>
                    <textarea
                      rows={4}
                      placeholder="Description"
                      name="description"
                      id="description"
                    ></textarea>
                    <small></small>
                  </div>
                  {/* cancel button */}
                  <div className="flex flex-row flex-wrap gap-4 justify-end">  
          <Button onClick={handleClose} variant="outlined" className="mr-2">
            Cancel
          </Button>
           {/* submit button */}
           <Button  variant="contained" color="primary">
            Submit
          </Button>
                      </div>
                      </form>
                      </div>
                      </div>
                      </Box>
                      </Modal>
         
      <Modal
          open={editOpen}
          onClose={handleEditClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="overflow-scroll h-[85vh] md:h-[38.5rem] no-scrollbar">
              <div className="h-fit">
                <h5 className=" text-2xl font-bold">Update Expenses</h5>
                <form
                  action=""
                  className="addProject mt-8 flex flex-col gap-y-2"
                >
                  <Grid2 container spacing={2} className="w-full">
                    {/* Expense Name */}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="expenseName">ExpenseName</label>
                      <input
                        type="text"
                        required
                        placeholder="Expense Name"
                        name="expenseName"
                        id="expenseName"
                      />
                      </Grid2>
                      {/* Expense Date */}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="expenseDate">Date</label>
                      <input
                        type="date"
                        required
                        placeholder="Expense Date"
                        name="expenseDate"
                        id="expenseDate"
                      />
                      <small></small>
                      </Grid2>
                      </Grid2>
                      <Grid2 container spacing={2} className="w-full">
                        {/* Expense Purchased by */}
                        <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                          <label htmlFor='purchasedBy'>Purchased By</label>
                          <select name="purchasedby" id="purchasedby" className=''>
                        <option value="">Select</option>
                        <option value="">User 1</option>
                        <option value="">User 2</option>
                        <option value="">User 3</option>
                      </select>
                      <small></small>
                        </Grid2>
                        {/* Expense Purchased from */}
                        <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                          <label htmlFor='purchasedfrom'>Purchased From</label>
                          <select name="purchasedFrom" id="purchasedFrom" className=''>
                        <option value="">Select</option>
                        <option value="">Vendor 1</option>
                        <option value="">Vendor 2</option>
                        <option value="">Vendor 3</option>
                      </select>
                      <small></small>
                        </Grid2>
                      </Grid2>
                      <Grid2 container spacing={2} className="w-full">
                        {/* Expense Amount */}
                        <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="amount">Amount</label>
                      <input
                        type="text"
                        required
                        placeholder="Amount"
                        name="Amount"
                        id="Amount"
                      />
                      <small></small>
                      </Grid2>
                      {/* Expense Bank account */}
                      <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                          <label htmlFor='bankAccount'>Bank Account</label>
                          <select name="bankAccount" id="bankAccount" className=''>
                        <option value="">Select</option>
                        <option value="">23456787654</option>
                        <option value="">43565734325</option>
                        <option value="">12344563345</option>
                      </select>
                      <small></small>
                        </Grid2>
                      </Grid2>
                      {/* Expense Description */}
                      <div className="w-full inputData">
                    <label htmlFor="Description">Description</label>
                    <textarea
                      rows={4}
                      placeholder="Description"
                      name="description"
                      id="description"
                    ></textarea>
                    <small></small>
                  </div>
                  {/* cancel button */}
                  <div className="flex flex-row flex-wrap gap-4 justify-end">  
          <Button onClick={handleEditClose} variant="outlined" className="mr-2">
            Cancel
          </Button>
          {/* submit button */}
          <Button   variant="contained" className={
                        "bg-[var(--primary1)] hover:bg-[var(--primary2)] text-white"
                      }>
            Submit
          </Button>
                      </div>
                      </form>
                      </div>
                      </div>
                      </Box>
                      </Modal>
      {/* Delete Modal*/}

        <Modal
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style, width: 400 }} className="rounded-[.5rem] ">
            <div className="w-full py-3 ">
              <div>Do you want to delete ?</div>
              <div className="flex mt-8 justify-end gap-4">
                <Button onClick={handleDeleteClose} variant="outlined" className="mr-2"
                >
                  Close
                </Button>
                <Button variant="contained" color="primary">Delete</Button>
              </div>
            </div>
          </Box>
        </Modal>
         {/* View Modal */}
         <Modal
          open={viewOpen}
          onClose={handleViewClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="w-full  ">
              <div>
                <div className="  mx-auto ">
                  {/* Tab Navigation */}
                  <div className="flex flex-row justify-between items-start ">
                    <div className="flex max-w-md w-full gap-2">
                      {["Expense Details", "Vendor Details"].map(
                        (tab) => (
                          <button
                            key={tab}
                            className={`flex-1 mb-4 cursor-pointer bg-gray-300 py-2 text-center  capitalize border-b-2  
            ${activeTab === tab ? " border-[var(--primary1)] text-[var(--primary1)] font-bold" : "text-gray-800 border-transparent font-semibold"}`}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>

                    <div className="w-[2rem] text-black">
                      <IconButton onClick={handleViewClose}>
                        <CancelIcon className="text-gray-800" />
                      </IconButton>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="h-[20rem] overflow-scroll no-scrollbar">
                    <div className="p- h-fit">
                      {activeTab === "Expense Details" && (
                        <div className="space-y-2">
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Expense Name : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Expense 1</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Date :</div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>25/01/25</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Purchased From : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>10-05-2025</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Bank Account :</div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>15742352365</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Description : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Blanditiis id totam
                                perspiciatis necessitatibus voluptate pariatur
                                dicta voluptatem modi eos assumenda ut itaque
                                eligendi laboriosam alias minima impedit
                                debitis, tempore quo explicabo. Perferendis,
                                vero sed laborum unde porro eum animi quos qui
                                amet maiores perspiciatis autem ad consequuntur
                                nam molestiae doloribus dignissimos ab, sapiente
                                iusto corporis? Delectus tenetur cupiditate
                                repellendus debitis deleniti assumenda autem
                                sapiente sequi, soluta a nulla vero, vel, ab
                                libero? Unde quidem necessitatibus quos ducimus
                                atque voluptas est inventore accusamus
                                voluptatem dolorum assumenda magni repellat,
                                aliquid sequi, doloribus cum, quaerat obcaecati
                                incidunt neque molestiae excepturi distinctio
                                nulla ea!
                                </div>
                            </Grid2>
                          </Grid2>
                        </div>
                      )}
                      {activeTab === "Vendor Details" && (
                        <div className="space-y-2">
                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Vendor Name : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>name</div>
                          </Grid2>
                        </Grid2>
                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Vendor Email : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>example@email.com</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Vendor Number : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>1093735</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Vendor Address : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Lorem ipsum </div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Country :  </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>India</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Company Name : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Lorem ipsum</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Company Email : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>company@gmail.com</div>
                          </Grid2>
                        </Grid2>
                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Comapny Contact : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>
                              837355738
                            </div>
                          </Grid2>
                        </Grid2>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 justify-end gap-4">
                <Button onClick={handleViewClose} variant="outlined" className={"border border-gray mr-2"}>
                  Close
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
   </SideBar>
    </div>
    )
}

export default Expenses
