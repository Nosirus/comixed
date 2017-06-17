/*
 * ComixEd - A digital comic book library management application.
 * Copyright (C) 2017, Darryl L. Pierce
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.package
 * org.comixed;
 */

package org.comixed.ui;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GuiContext
{
    private MainFrame mainFrame = new MainFrame();
    private MainClientPanel mainClientPanel = new MainClientPanel();
    private StatusBar statusBar = new StatusBar();
    private MainMenuBar mainMenuBar = new MainMenuBar();

    @Bean
    public MainFrame mainFrame()
    {
        return mainFrame;
    }

    @Bean
    public MainClientPanel mainClientPanel()
    {
        return mainClientPanel;
    }

    @Bean
    public StatusBar statusBar()
    {
        return statusBar;
    }

    @Bean
    public MainMenuBar mainMenuBar()
    {
        return mainMenuBar;
    }
}