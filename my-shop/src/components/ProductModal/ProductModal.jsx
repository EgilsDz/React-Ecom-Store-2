import { Button, Box, TextField, Modal } from "@mui/material"
import { ProductModalStyles } from "./ProductModalStyles"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts, editProducts } from "../../features/products/productsSlice";



function ProductModal({ open, onClose, selectedProduct }) {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: selectedProduct?.title || "",
        short_description: selectedProduct?.short_description || "",
        long_description: selectedProduct?.long_description || "",
        price: selectedProduct?.price || "",
        year: selectedProduct?.year || "",
        RAM: selectedProduct?.RAM || "",
        warranty_period: selectedProduct?.warranty_period || "",
        image: selectedProduct?.image || "",
        features: selectedProduct?.features || [],
    });

    const isEditing = !!selectedProduct

    const handleClose = () => {
        onClose();
    }

    const handleSave = async () => {
        try {
            if (isEditing) {
                console.log(formData)
                await dispatch(editProducts({
                    formData,
                    id: selectedProduct.id
                })).unwrap();
            } else {
                await dispatch(addProducts(formData)).unwrap();
            }

            onClose();
        } catch (error) {
            console.log("oh no it failed", error)
        }
    }



    return (
        <Modal open={open}
            onClose={handleClose} sx={ProductModalStyles.modal}>
            <Box sx={ProductModalStyles.modalBody}>
                <Box sx={ProductModalStyles.modalTextContainer}>
                    <TextField placeholder="Title" value={formData.title} onChange={(e) =>
                        setFormData({
                            ...formData,
                            title: e.target.value
                        })
                    } variant="filled" sx={ProductModalStyles.modalTextBox} />
                    <TextField placeholder="Short description" onChange={(e) =>
                        setFormData({
                            ...formData,
                            short_description: e.target.value
                        })
                    } value={formData.short_description} variant="filled" sx={ProductModalStyles.modalTextBox} />
                    <TextField placeholder="Long description" onChange={(e) =>
                        setFormData({
                            ...formData,
                            long_description: e.target.value
                        })
                    } value={formData.long_description} variant="filled" sx={ProductModalStyles.modalTextBox} />
                    <TextField placeholder="Price" onChange={(e) =>
                        setFormData({
                            ...formData,
                            price: e.target.value
                        })
                    } value={formData.price} variant="filled" sx={ProductModalStyles.modalTextBox} />
                    <TextField placeholder="Year" onChange={(e) =>
                        setFormData({
                            ...formData,
                            year: e.target.value
                        })
                    } value={formData.year} variant="filled" sx={ProductModalStyles.modalTextBox} />
                    <TextField placeholder="RAM memory" onChange={(e) =>
                        setFormData({
                            ...formData,
                            RAM: e.target.value
                        })
                    } value={formData.RAM} variant="filled" sx={ProductModalStyles.modalTextBox} />
                    <TextField placeholder="Warranty period" onChange={(e) =>
                        setFormData({
                            ...formData,
                            warranty_period: e.target.value
                        })
                    } value={formData.warranty_period} variant="filled" sx={ProductModalStyles.modalTextBox} />
                </Box>
                <Box sx={ProductModalStyles.modalBtnContainer}>
                    <Button variant="outlined" onClick={handleClose}>CANCEL</Button>
                    <Button variant="contained" onClick={handleSave}>
                        {isEditing ? "SAVE CHANGES" : "ADD PRODUCT"}
                    </Button>
                </Box>

            </Box>
        </Modal>
    )
}
export default ProductModal