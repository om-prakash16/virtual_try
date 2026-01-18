from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from routers import contact

# Initialize the FastAPI application
app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    """
    Health check endpoint for monitoring purposes.
    Returns:
        dict: Status 'ok' if healthy.
    """
    return {"status": "ok", "message": "Annu Design Studio API Backend"}

# Include Routers
app.include_router(contact.router, prefix="/api/v1/contact", tags=["contact"])

from fastapi import UploadFile, File
from fastapi.responses import Response
from rembg import remove

import asyncio
from functools import partial

@app.post("/api/remove-bg")
# Endpoint for background removal using rembg
async def remove_background(file: UploadFile = File(...)):
    try:
        input_image = await file.read()
        print(f"Processing image: {file.filename}, size: {len(input_image)} bytes")
        
        # Run CPU-bound rembg operation in a separate thread to avoid blocking the event loop
        loop = asyncio.get_running_loop()
        output_image = await loop.run_in_executor(None, partial(remove, input_image))
        
        print("Background removed successfully")
        return Response(content=output_image, media_type="image/png")
    except Exception as e:
        print(f"Error removing background: {str(e)}")
        # Return a 500 error with the message to helps debug frontend
        return Response(content=str(e), status_code=500)
