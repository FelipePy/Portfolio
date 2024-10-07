module.exports = {
    module: {
        rules: [
            {
                test: /\.(mp4|webm)$/, // Adicione outros formatos de vídeo se necessário
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'public/images'
                    }
                }
            }
        ]
    }
};
