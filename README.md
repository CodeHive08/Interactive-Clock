# 🎵 Modern Music Player

A beautiful, feature-rich music player built with HTML, CSS, and JavaScript. This player supports multiple songs, playlist management, shuffle, repeat modes, volume control, and **local file uploads**.

## ✨ Features

- **Multiple Songs Support**: Play through a playlist of songs
- **Local File Upload**: Add songs from your computer's storage
- **Persistent Storage**: Uploaded songs are saved and persist between browser sessions
- **Beautiful UI**: Modern glassmorphism design with gradients and animations
- **Playlist Management**: Click on any song in the playlist to play it
- **Shuffle Mode**: Randomize the playlist order
- **Repeat Modes**: 
  - No repeat
  - Repeat one song
  - Repeat all songs
- **Volume Control**: Adjust volume with a slider
- **Progress Bar**: Seek through songs by clicking on the progress bar
- **File Upload Notifications**: Visual feedback when adding songs
- **Clear Playlist**: Reset playlist to default songs
- **Keyboard Shortcuts**:
  - Spacebar: Play/Pause
  - Left Arrow: Previous song
  - Right Arrow: Next song
- **Responsive Design**: Works on desktop and mobile devices

## 🎮 Controls

- **Play/Pause Button**: Center button to play or pause music
- **Previous/Next**: Navigate between songs
- **Shuffle**: Randomize playlist order
- **Repeat**: Cycle through repeat modes (none → one → all)
- **Volume Slider**: Adjust playback volume
- **Progress Bar**: Click to seek to specific time
- **Playlist**: Click any song to play it directly
- **Add Songs Button**: Upload music files from your computer
- **Clear Playlist Button**: Reset playlist to default songs

## 📁 Adding Your Own Songs

### Method 1: File Upload (Recommended)
1. Click the **"Add Songs"** button
2. Select one or multiple audio files from your computer
3. Supported formats: MP3, WAV, OGG, M4A, and other audio formats
4. Songs will be automatically added to your playlist
5. You'll see a notification confirming the upload

### Method 2: Manual Code Editing
To add songs programmatically, edit the `songs` array in `script.js`:

```javascript
const songs = [
  {
    title: 'Your Song Title',
    artist: 'Artist Name',
    cover: 'path/to/cover-image.jpg',
    file: 'path/to/song.mp3',
    duration: '3:45'
  },
  // Add more songs...
];
```

### Song Properties:
- `title`: Song title
- `artist`: Artist name
- `cover`: URL or path to album cover image
- `file`: URL or path to the audio file
- `duration`: Song duration in MM:SS format

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. The player will load with sample songs
3. Click the play button to start listening
4. Use the playlist to select different songs
5. Try the shuffle and repeat features
6. **Add your own music** using the "Add Songs" button

## 🎨 Customization

The player uses CSS custom properties and modern design techniques. You can customize:

- **Colors**: Modify the gradient backgrounds in `style.css`
- **Fonts**: Change the font family in the CSS
- **Animations**: Adjust transition timings
- **Layout**: Modify the container sizes and spacing

## 📱 Browser Support

This music player works in all modern browsers that support:
- HTML5 Audio API
- CSS Grid and Flexbox
- ES6 JavaScript features
- CSS backdrop-filter (for glassmorphism effect)
- File API (for local file uploads)

## 🎯 Sample Songs

The music player starts with an empty playlist. You can add your own songs using the **"Add Songs"** button to upload MP3 files from your computer.

**Supported Formats**: MP3, WAV, OGG, M4A, and other audio formats

## 🔧 Technical Details

- **HTML5 Audio**: Uses native browser audio capabilities
- **File API**: Handles local file uploads and creates object URLs
- **CSS Grid/Flexbox**: Modern layout techniques
- **JavaScript ES6**: Modern JavaScript features
- **Font Awesome**: Icons for the interface
- **Responsive Design**: Mobile-friendly layout
- **Notification System**: Visual feedback for user actions

## 💡 Tips

- **Multiple Files**: You can select multiple audio files at once when uploading
- **File Names**: The song title will be automatically extracted from the filename
- **Supported Formats**: Most common audio formats are supported (MP3, WAV, OGG, M4A, etc.)
- **Persistent Storage**: Uploaded songs are automatically saved and will persist between browser sessions
- **Storage Limits**: Browser localStorage has size limits (usually 5-10MB), so very large playlists may not save completely
- **Clear Playlist**: Use the "Clear Playlist" button to reset to default songs if needed
- **Cross-Device**: Songs are stored locally on each device/browser, not synced across devices

Enjoy your music! 🎶 

# 🕒 Interactive Clock App

A beautiful, interactive real-time clock for your browser. Features both digital and analog displays, multiple animated backgrounds, dark/light mode, and the ability to download the current view as an image for use as your desktop wallpaper.

## ✨ Features

- **Digital Clock**: Large, clear digital time display
- **Analog Clock**: Animated clock face with moving hour, minute, and second hands
- **Date & Day**: Shows full date and day of the week
- **AM/PM Indicator**: Clearly displays the time period
- **Dark/Light Mode**: Toggle between beautiful dark and light themes
- **Animated Backgrounds**: Choose from Gradient, Particles, Waves, or Minimal backgrounds
- **Download Image**: Instantly download the current clock view as a PNG image (set as your desktop wallpaper!)
- **Responsive Design**: Looks great on desktop and mobile
- **Live Animations**: Smooth transitions, animated backgrounds, and interactive UI elements
- **Notifications**: Get feedback when you change themes, backgrounds, or download an image

## 🚀 Usage

1. **Open `index.html`** in your browser.
2. **View the clock** in both digital and analog formats.
3. **Switch themes** using the "Dark Mode"/"Light Mode" button.
4. **Change backgrounds** using the background options at the bottom.
5. **Download Image**: Click the "Download Image" button to save the current view as a PNG. Set it as your desktop wallpaper!
6. **Enjoy the animations** and interactive features.

## 🎨 Background Options

- **Gradient**: Modern purple-blue gradient
- **Particles**: Floating animated particles
- **Waves**: Animated wave effect at the bottom
- **Minimal**: Clean, simple background

## 🖼️ Download as Desktop Background

- Click the **Download Image** button.
- The app will generate a PNG image of the current clock view and download it automatically.
- Set this image as your desktop wallpaper for a live clock look!

## 📱 Responsive & Modern

- Fully responsive for all devices
- Touch-friendly controls
- Modern CSS and JavaScript (no frameworks required)

## 🛠️ Technical Details

- **HTML5, CSS3, JavaScript**
- **Font Awesome** for icons
- **Canvas API** for image generation
- **CSS Animations** for backgrounds and transitions

---

Enjoy your new interactive clock! ⏰✨ 