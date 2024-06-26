'use client';

import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from './color.module.css';

const ColorsPage = () => {
    const theme = useTheme();

    return (
        <div className={styles.container}>
            <Typography variant="h4" component="h1" gutterBottom>
                Theme Colors
            </Typography>
            <div className={styles.colors}>
                {Object.keys(theme.palette).map((colorKey) => (
                    <div key={colorKey} className={styles.colorGroup}>
                        <Typography variant="h6" component="h2" className={styles.colorTitle}>
                            {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
                        </Typography>
                        <div className={styles.colorSwatches}>
                            {Object.keys(theme.palette[colorKey]).map((shade) => (
                                <div key={shade} className={styles.colorSwatch}>
                                    <div
                                        className={styles.colorBox}
                                        style={{ backgroundColor: theme.palette[colorKey][shade] }}
                                    ></div>
                                    <Typography variant="body2" className={styles.colorLabel}>
                                        {shade}: {theme.palette[colorKey][shade]}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorsPage;
