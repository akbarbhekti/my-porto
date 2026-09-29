import React, { useState } from "react"
import { Modal, IconButton, Box, Typography } from "@mui/material"
import { X as CloseIcon, Maximize2 as FullscreenIcon } from "lucide-react"

const Certificate = ({ ImgSertif }) => {
	const [open, setOpen] = useState(false)

	return (
		<Box component="div" sx={{ width: "100%" }}>
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					cursor: "pointer",
					"&:hover .overlay": { opacity: 1 },
				}}
				onClick={() => setOpen(true)}
			>
				<img
					src={ImgSertif}
					alt="Certificate"
					style={{
						width: "100%",
						height: "auto",
						display: "block",
						objectFit: "cover",
						aspectRatio: "16/11.5",
					}}
				/>
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						inset: 0,
						opacity: 0,
						transition: "all 0.3s ease",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "rgba(0,0,0,0.6)",
						color: "white",
					}}
				>
					<FullscreenIcon className="w-10 h-10 mb-2" />
					<Typography variant="h6" sx={{ fontWeight: 600 }}>Lihat Sertifikat</Typography>
				</Box>
			</Box>

			<Modal open={open} onClose={() => setOpen(false)}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						maxWidth: "90vw",
						maxHeight: "90vh",
						outline: "none",
					}}
				>
					<IconButton
						onClick={() => setOpen(false)}
						sx={{ position: "absolute", right: 16, top: 16, color: "white", bgcolor: "rgba(0,0,0,0.6)" }}
					>
						<CloseIcon className="w-6 h-6" />
					</IconButton>
					<img
						src={ImgSertif}
						alt="Certificate Full"
						style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }}
					/>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate