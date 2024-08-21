// // translationsController.js

// import Translation from './TranslationSchema';

// app.post('/api/translations', async (req, res) => {
//   const { translatedText } = req.body;

//   try {
//     // Insert translated text into the database
//     const translation = new Translation({ text: translatedText });
//     const result = await translation.save();
//     res.status(201).json(result);
//   } catch (error) {
//     console.error('Error storing translation:', error);
//     res.status(500).send('Error storing translation');
//   }
// });
